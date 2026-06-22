import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import VerificationEntryModal from '../components/braveheart/VerificationEntryModal';
import { VerificationEntryIntent } from '../config/cta';

interface VerificationEntryContextType {
  openVerificationEntry: (intent?: VerificationEntryIntent) => void;
  closeVerificationEntry: () => void;
  /** @deprecated Use openVerificationEntry — retained for existing call sites. */
  openModal: (intent?: VerificationEntryIntent) => void;
  closeModal: () => void;
}

const VerificationEntryContext = createContext<VerificationEntryContextType>({
  openVerificationEntry: () => {},
  closeVerificationEntry: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export function useVerificationEntry() {
  return useContext(VerificationEntryContext);
}

/** @deprecated Use useVerificationEntry — retained for existing call sites. */
export function useContactModal() {
  return useContext(VerificationEntryContext);
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<VerificationEntryIntent>('verify');

  const openVerificationEntry = useCallback((nextIntent: VerificationEntryIntent = 'verify') => {
    setIntent(nextIntent);
    setIsOpen(true);
  }, []);

  const closeVerificationEntry = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <VerificationEntryContext.Provider
      value={{
        openVerificationEntry,
        closeVerificationEntry,
        openModal: openVerificationEntry,
        closeModal: closeVerificationEntry,
      }}
    >
      {children}
      <VerificationEntryModal
        isOpen={isOpen}
        intent={intent}
        onClose={closeVerificationEntry}
      />
    </VerificationEntryContext.Provider>
  );
}
