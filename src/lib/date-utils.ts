/**
 * Utility functions for date formatting and manipulation
 */

/**
 * Format a date string or Date object to a user-friendly format
 * @param date - Date string or Date object
 * @param format - Optional format type ('short', 'long', 'relative')
 * @returns Formatted date string
 */
export const formatDate = (
  date: string | Date,
  format: 'short' | 'long' | 'relative' = 'short'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Check if the date is valid
  if (isNaN(dateObj.getTime())) {
    return date.toString(); // Return the original string if invalid
  }
  
  // For relative format (e.g., "Today", "Tomorrow", "Yesterday", "2 days ago")
  if (format === 'relative') {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const dateOnly = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
    
    if (dateOnly.getTime() === today.getTime()) {
      return `Today at ${dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (dateOnly.getTime() === tomorrow.getTime()) {
      return `Tomorrow at ${dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (dateOnly.getTime() === yesterday.getTime()) {
      return `Yesterday at ${dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    
    // Calculate days difference
    const diffTime = dateOnly.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return `${Math.abs(diffDays)} days ago`;
    } else if (diffDays > 0) {
      return `In ${diffDays} days`;
    }
  }
  
  // For short format (e.g., "10:30 PM, Jun 28")
  if (format === 'short') {
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const day = dateObj.getDate();
    
    return `${time}, ${month} ${day}`;
  }
  
  // For long format (e.g., "10:30 PM, June 28, 2025")
  return dateObj.toLocaleString('default', {
    hour: '2-digit',
    minute: '2-digit',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Convert a date string to datetime-local input format (YYYY-MM-DDThh:mm)
 * @param dateString - The date string to convert
 * @returns Formatted datetime-local string
 */
export const formatDateForInput = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return '';
    }
    
    // Format for datetime-local input: YYYY-MM-DDThh:mm
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  } catch (error) {
    console.error("Date conversion error:", error);
    
    return '';
  }
};
