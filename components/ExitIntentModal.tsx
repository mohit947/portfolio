"use client";

type ExitIntentModalProps = {
  open: boolean;
  pendingHref: string | null;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ExitIntentModal({
  open,
  pendingHref,
  onClose,
  onConfirm,
}: ExitIntentModalProps) {
  if (!open) return null;

  return (
    <div
      className="exit-intent-modal-overlay fixed inset-0 flex items-center justify-center bg-black/70 p-4"
      style={{ zIndex: 2147483647 }}
    >
      <div className="exit-intent-modal-content w-full max-w-md rounded-3xl border border-[#1a1a2e] bg-surface p-8 shadow-[0_0_80px_rgba(0,255,136,0.12)] relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Leaving already?</h2>
            <p className="mt-3 text-sm text-muted">
              You&apos;re about to go outside without connecting. Stay a moment and send me a quick message.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-[#161828] bg-[#090b17]/90 p-4 text-xs text-muted">
          <p className="font-medium text-white">Pending destination</p>
          <p className="break-all mt-2">{pendingHref || "External site"}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="btn-outline w-full"
          >
            Stay & connect
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="btn-primary w-full"
          >
            Continue anyway
          </button>
        </div>
      </div>
    </div>
  );
}
