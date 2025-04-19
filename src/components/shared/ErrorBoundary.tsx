import React, { useState, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div>
                <h2>Oops! Something went wrong.</h2>
                <p>Please try again later.</p>
            </div>
        );
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

export default ErrorBoundary;
