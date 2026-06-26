import React from 'react';
import { GoogleLogin, GoogleOAuthProvider, type CredentialResponse } from '@react-oauth/google';

interface GoogleSignInButtonProps {
  clientId: string;
  onSuccess: (response: CredentialResponse) => void;
  onError: () => void;
}

export default function GoogleSignInButton({ clientId, onSuccess, onError }: GoogleSignInButtonProps) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex justify-center">
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          theme="filled_black"
          size="medium"
          text="continue_with"
          shape="rectangular"
        />
      </div>
    </GoogleOAuthProvider>
  );
}
