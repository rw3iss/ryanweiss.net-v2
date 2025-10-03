export const truncate = (str: string, length?: number) => {
    if (!str) return str;
    if (length && str.length > length) return (str.slice(0, length) + '...');
    return str;
}

export const isValidEmail = (email: string): boolean => {
	// A commonly used regex for email validation
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
}

export const isValidUrl = (text: string) => {
	try {
		new URL(text);
		return true;
	} catch (error) {
		return false;
	}
}