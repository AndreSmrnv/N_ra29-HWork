export const currencySymbol= (currency) => {
    switch (currency) {
      case 'USD':
        return '$ ';
      case 'EUR':
        return '€ ';
      default:
        return `${currency} `;
    }
    
  }
  
  export const titleSlice = (title)=> {
    return (title.length > 50) ? `${title.slice(0, 50)}...` : title;
  }
  
  export const  quantityLevel = (quantity) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  }
  