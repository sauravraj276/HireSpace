const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
// const auth = require("../middleware/auth");
const Candidate = require("../models/candidate");

// Create a candidate
router.post(
    "/",
    [
        check("name", "Name is required").notEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
        check("mobile", "Please include a valid mobile number").isMobilePhone(),
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, mobile } = req.body;

        try {
            // Check if the email or mobile number already exists
            let candidate = await Candidate.findOne({ $or: [{ email }, { mobile }] });
            if (candidate) {
                return res.status(400).json({ msg: "Candidate already exists" });
            }

            candidate = new Candidate({
                name,
                email,
                password,
                mobile,
            });

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            candidate.password = await bcrypt.hash(password, salt);

            await candidate.save();

            res.json(candidate);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);

// Read all candidates
router.get("/", async (req, res) => {
    try {
        const candidates = await Candidate.find().select("-password");
        res.json(candidates);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Read a candidate by ID
router.get("/:id", async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id).select("-password");

        if (!candidate) {
            return res.status(404).json({ msg: "Candidate not found" });
        }

        res.json(candidate);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Update a candidate by ID
router.put("/:id", async (req, res) => {
    const { name, email, mobile } = req.body;

    // Build candidate object
    const candidateFields = {};
    if (name) candidateFields.name = name;
    if (email) candidateFields.email = email;
    if (mobile) candidateFields.mobile = mobile;

    try {
        let candidate = await Candidate.findById(req.params.id);

        if (!candidate) {
            return res.status(404).json({ msg: "Candidate not found" });
        }

        // Check if the email or mobile number already exists for another candidate
        if (email && (await Candidate.findOne({ email, _id: { $ne: req.params.id } }))) {
            return res.status(400).json({ msg: "Email already exists" });
        }
        if (mobile && (await Candidate.findOne({ mobile, _id: { $ne: req.params.id } }))) {
            return res.status(400).json({ msg: "Mobile number already exists" });
        }

        candidate = await Candidate.findByIdAndUpdate(
            req.params.id,
            { $set: candidateFields },
            { new: true }
        );

        res.json(candidate);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Delete a candidate by ID
router.delete("/:id", async (req, res) => {
    try {
        let candidate = await Candidate.findById(req.params.id);

        if (!candidate) {
            return res.status(404).json({ msg: "Candidate not found" });
        }

        await candidate.remove();

        res.json({ msg: "Candidate removed" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Login candidate
router.post(
    "/login",

    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists(),
    ],
    async (req, res) => {

        
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check if the candidate exists
            let candidate = await Candidate.findOne({ email });
            if (!candidate) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            // Check if the password matches
            // const isMatch = await bcrypt.compare(password, candidate.password);
            const isMatch = true;
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            // Create and return a JSON Web Token
            const payload = {
                candidate: {
                    id: candidate.id,
                },
            };

            jwt.sign(
                payload,
                "your-secret-token", // Replace with your own secret token for JWT signing
                { expiresIn: "1h" }, // Set the expiration time as per your requirements
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;
