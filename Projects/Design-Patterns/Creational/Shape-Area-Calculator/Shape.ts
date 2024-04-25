export abstract class Shape {
  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
  // getInfo can be implemented in concrete shapes if needed for specific formatting
  getInfo(): string {
    if (isNaN(this.getSideLength()) || this.getSideLength() <= 0) {
      throw new Error(
        "Invalid side length. Side length must be a positive number."
      );
    }

    const shapeName = this.getName();
    const formattedPerimeter = this.formatNumber(this.calculatePerimeter(), 2);
    const formattedArea = this.formatNumber(this.calculateArea(), 2);

    return `Shape Information:
        - Name: ${shapeName}
        - Side Length: ${this.getSideLength().toFixed(2)}
        - Perimeter: ${formattedPerimeter}
        - Area: ${formattedArea}`;
  }
  // Utility function for consistent number formatting (assuming you have many shapes)
  formatNumber(value: number, decimals: number): string {
    return value.toFixed(decimals);
  }

  abstract getName(): string;
  abstract getSideLength(): number;
}
