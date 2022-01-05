export const formatName = name => {
    return name ? name.charAt(0).toUpperCase() + name.substring(1).toLowerCase() : 'Unknown';
}