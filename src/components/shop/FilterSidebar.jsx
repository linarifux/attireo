import React from "react";
import AnimatedButton from "../ui/AnimatedButton"; // Use our animated button

// --- Filter Group (No changes needed) ---
const FilterGroup = ({ title, children }) => (
  <div className="border-b border-attireo-black/20 dark:border-gray-700 py-6">
    {" "}
    {/* Updated border color */}
    <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

// --- Filter Checkbox (Updated) ---
const FilterCheckbox = (
  { label, id, name, checked, onChange } // Added checked and onChange props
) => (
  <label
    htmlFor={id}
    className="flex items-center space-x-3 text-sm cursor-pointer group"
  >
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked} // Control checked state
      onChange={onChange} // Handle changes
      value={label} // Use label as the value to track
      className="h-4 w-4 bg-transparent border-attireo-black/30 dark:border-attireo-beige/30 text-attireo-gold focus:ring-attireo-gold/50 focus:ring-offset-0 focus:ring-1 rounded-sm"
    />
    {/* Updated text colors */}
    <span
      className="text-gray-700 dark:text-gray-300group-hover:text-attireo-black dark:group-hover:text-attireo-white"
    >
      {label}
    </span>
  </label>
);

// --- FilterSidebar (Main Update) ---
const FilterSidebar = ({
  // Props for controlling the state from the parent
  selectedCategories = [], // Default to empty array
  onCategoryChange,
  selectedSizes = [], // Default to empty array
  onSizeChange,
  priceRange = { min: "", max: "" }, // Default price range
  onPriceChange,
  applyFilters, // Function to apply filters (optional, could apply onChange)
}) => {
  // --- Handler for Category Checkboxes ---
  const handleCategoryCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedCategories = checked
      ? [...selectedCategories, value] // Add category if checked
      : selectedCategories.filter((cat) => cat !== value); // Remove if unchecked
    onCategoryChange(updatedCategories); // Call parent handler
  };

  // --- Handler for Size Buttons ---
  const handleSizeButtonClick = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size) // Remove size if already selected
      : [...selectedSizes, size]; // Add size if not selected
    onSizeChange(updatedSizes); // Call parent handler
  };

  // --- Handler for Price Inputs ---
  const handlePriceInputChange = (event) => {
    const { name, value } = event.target;
    // Ensure only numbers (or empty string) are entered
    const numericValue = value === "" ? "" : parseInt(value, 10);
    if (!isNaN(numericValue) || value === "") {
      onPriceChange({ ...priceRange, [name]: numericValue }); // Call parent handler
    }
  };

  return (
    <aside className="w-full lg:w-1/4 xl:w-1/5 p-4 lg:pr-8">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* --- Category Filters --- */}
      <FilterGroup title="Category">
        {["Men", "Women", "Unisex", "Accessories"].map((category) => (
          <FilterCheckbox
            key={category}
            id={`cat-${category.toLowerCase()}`}
            name="category"
            label={category}
            checked={selectedCategories.includes(category)} // Check if category is selected
            onChange={handleCategoryCheckboxChange} // Use the handler
          />
        ))}
      </FilterGroup>

      {/* --- Price Range Filters --- */}
      <FilterGroup title="Price Range">
        <div className="flex items-center space-x-2">
          <input
            type="number" // Use number input
            name="min" // Identify as min price
            placeholder="Min"
            value={priceRange.min} // Control value
            onChange={handlePriceInputChange} // Use the handler
            min="0" // Set min attribute
            className="w-full p-2 text-sm
                       bg-attireo-white dark:bg-gray-800
                       border border-attireo-black/20 dark:border-gray-700
                       focus:border-attireo-gold focus:ring-0
                       placeholder-gray-500"
            aria-label="Minimum price"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number" // Use number input
            name="max" // Identify as max price
            placeholder="Max"
            value={priceRange.max} // Control value
            onChange={handlePriceInputChange} // Use the handler
            min="0" // Set min attribute
            className="w-full p-2 text-sm
                       bg-attireo-white dark:bg-gray-800
                       border border-attireo-black/20 dark:border-gray-700
                       focus:border-attireo-gold focus:ring-0
                       placeholder-gray-500"
            aria-label="Maximum price"
          />
        </div>
      </FilterGroup>

      {/* --- Size Filters --- */}
      <FilterGroup title="Size">
        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL", "OS"].map((size) => (
            <button
              key={size}
              onClick={() => handleSizeButtonClick(size)} // Use the handler
              // Dynamically change style based on selection
              className={`h-9 w-9 text-sm font-medium border transition-colors duration-150
                          ${
                            selectedSizes.includes(size)
                              ? "bg-attireo-black dark:bg-attireo-beige text-attireo-white dark:text-attireo-black border-transparent"
                              : "border-attireo-black/20 dark:border-gray-700 hover:border-attireo-black dark:hover:border-attireo-white text-gray-700 dark:text-gray-300"
                          }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterGroup>

      {/* --- Apply Button (Optional) --- */}
      {/* If applyFilters prop is provided, show the button */}
      {applyFilters && (
        <AnimatedButton
          onClick={applyFilters} // Use the prop function
          className="w-full mt-6 py-3
                       bg-attireo-black dark:bg-attireo-beige
                       text-attireo-white dark:text-attireo-black
                       font-semibold tracking-wide uppercase
                       hover:bg-gray-800 dark:hover:bg-attireo-white
                       transition-colors"
        >
          Apply Filters
        </AnimatedButton>
      )}
    </aside>
  );
};

export default FilterSidebar;
