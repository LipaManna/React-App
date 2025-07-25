import { signupWithProfile } from './authService';
import { createUserProfile, IUserProfile } from './userService';

export interface ISignupData {
    email: string;
    password: string;
    fullName: string;
    confirmPassword: string;
}

export interface ISignupResult {
    success: boolean;
    user?: any;
    userProfile?: IUserProfile;
    error?: string;
}

export const validateSignupData = (data: ISignupData): { isValid: boolean; error?: string } => {
    // Check if all fields are provided
    if (!data.email || !data.password || !data.fullName || !data.confirmPassword) {
        return { isValid: false, error: 'All fields are required' };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return { isValid: false, error: 'Please enter a valid email address' };
    }

    // Validate password length
    if (data.password.length < 6) {
        return { isValid: false, error: 'Password must be at least 6 characters long' };
    }

    // Check if passwords match
    if (data.password !== data.confirmPassword) {
        return { isValid: false, error: 'Passwords do not match' };
    }

    // Validate full name
    if (data.fullName.trim().length < 2) {
        return { isValid: false, error: 'Full name must be at least 2 characters long' };
    }

    return { isValid: true };
};

export const handleSignup = async (data: ISignupData): Promise<ISignupResult> => {
    try {
        // Validate input data
        const validation = validateSignupData(data);
        if (!validation.isValid) {
            return {
                success: false,
                error: validation.error
            };
        }

        // Perform signup
        const result = await signupWithProfile({
            email: data.email,
            password: data.password,
            fullName: data.fullName
        });

        return {
            success: true,
            user: result.user,
            userProfile: result.userProfile
        };

    } catch (error: any) {
        // Handle Firebase Auth errors
        let errorMessage = 'An error occurred during signup';
        
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'An account with this email already exists';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Please enter a valid email address';
        } else if (error.code === 'auth/weak-password') {
            errorMessage = 'Password is too weak. Please choose a stronger password';
        } else if (error.code === 'auth/operation-not-allowed') {
            errorMessage = 'Email/password accounts are not enabled. Please contact support';
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = 'Network error. Please check your internet connection';
        }

        return {
            success: false,
            error: errorMessage
        };
    }
}; 