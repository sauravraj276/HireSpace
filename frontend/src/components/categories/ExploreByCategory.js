import React, { useState } from "react";
import {
  Palette,
  Code,
  BarChart3,
  Megaphone,
  Cpu,
  TrendingUp,
  PenTool,
  Image as ImageIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/components/explore-category.css";

const ExploreByCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Design",
      number: "235",
      description: "jobs available",
      icon: Palette,
      color: "#FF6B6B",
    },
    {
      id: 2,
      name: "Web Development",
      number: "153",
      description: "jobs available",
      icon: Code,
      color: "#4ECDC4",
    },
    {
      id: 3,
      name: "Data Analysis",
      number: "87",
      description: "jobs available",
      icon: BarChart3,
      color: "#45B7D1",
    },
    {
      id: 4,
      name: "Marketing",
      number: "120",
      description: "jobs available",
      icon: Megaphone,
      color: "#FFA07A",
    },
    {
      id: 5,
      name: "Software Engineering",
      number: "98",
      description: "jobs available",
      icon: Cpu,
      color: "#9B59B6",
    },
    {
      id: 6,
      name: "Sales",
      number: "64",
      description: "jobs available",
      icon: TrendingUp,
      color: "#1ABC9C",
    },
    {
      id: 7,
      name: "Writing",
      number: "112",
      description: "jobs available",
      icon: PenTool,
      color: "#E74C3C",
    },
    {
      id: 8,
      name: "Graphic Design",
      number: "78",
      description: "jobs available",
      icon: ImageIcon,
      color: "#F39C12",
    },
  ];

  const [categoryData] = useState(categories);

  return (
    <section className="explore-category section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Explore by <span className="text-primary">Category</span>
          </h2>
          <p className="section-subtitle">
            Browse jobs by category and find the perfect opportunity for you
          </p>
        </div>
        <div className="categories-grid">
          {categoryData.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link to="#" className="category-card" key={category.id}>
                <div
                  className="category-card-inner"
                  style={{ "--category-color": category.color }}
                >
                  <div className="category-icon-wrapper">
                    <IconComponent
                      size={40}
                      strokeWidth={2}
                      className="category-icon"
                    />
                  </div>
                  <div className="category-content">
                    <h3 className="category-name">{category.name}</h3>
                    <div className="category-footer">
                      <span className="category-count">
                        <strong>{category.number}</strong>{" "}
                        {category.description}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreByCategory;
