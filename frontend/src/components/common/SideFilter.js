import React, { useState } from 'react';
import '../../styles/components/side-filter.css';

function SideFilter() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((value) => value !== checkboxValue));
    }
  };

  return (
    <div className="side-filter">
      <div className="filter-section">
        <h3 className="filter-title">Type of Employment</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="full-time"
                checked={selectedCheckboxes.includes('full-time')}
                onChange={handleCheckboxChange}
              />
              <span>Full-Time</span>
            </label>
          </li>
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="part-time"
                checked={selectedCheckboxes.includes('part-time')}
                onChange={handleCheckboxChange}
              />
              <span>Part-Time</span>
            </label>
          </li>
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="contract"
                checked={selectedCheckboxes.includes('contract')}
                onChange={handleCheckboxChange}
              />
              <span>Contract</span>
            </label>
          </li>
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="internship"
                checked={selectedCheckboxes.includes('internship')}
                onChange={handleCheckboxChange}
              />
              <span>Internship</span>
            </label>
          </li>
        </ul>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Categories</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="design"
                checked={selectedCheckboxes.includes('design')}
                onChange={handleCheckboxChange}
              />
              <span>Design</span>
            </label>
          </li>
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="development"
                checked={selectedCheckboxes.includes('development')}
                onChange={handleCheckboxChange}
              />
              <span>Development</span>
            </label>
          </li>
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="marketing"
                checked={selectedCheckboxes.includes('marketing')}
                onChange={handleCheckboxChange}
              />
              <span>Marketing</span>
            </label>
          </li>
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="sales"
                checked={selectedCheckboxes.includes('sales')}
                onChange={handleCheckboxChange}
              />
              <span>Sales</span>
            </label>
          </li>
        </ul>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Salary Range</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="0-50k"
                checked={selectedCheckboxes.includes('0-50k')}
                onChange={handleCheckboxChange}
              />
              <span>$0 - $50k</span>
            </label>
          </li>
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="50k-100k"
                checked={selectedCheckboxes.includes('50k-100k')}
                onChange={handleCheckboxChange}
              />
              <span>$50k - $100k</span>
            </label>
          </li>
          <li className="filter-item">
            <label className="filter-label">
              <input 
                type="checkbox" 
                value="100k+"
                checked={selectedCheckboxes.includes('100k+')}
                onChange={handleCheckboxChange}
              />
              <span>$100k+</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideFilter;

