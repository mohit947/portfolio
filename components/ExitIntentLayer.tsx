"use client";

import { useEffect, useState } from "react";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function ExitIntentLayer() {
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [pendingExternalHref, setPendingExternalHref] = useState<string | null>(null);
  const [exitModalSeen, setExitModalSeen] = useState(false);

  useEffect(() => {
    const handleMouseOut = (event: MouseEvent) => {
      if (exitModalSeen) return;
      if (event.clientY <= 0 || event.clientX <= 0 || event.clientX >= window.innerWidth) {
        setExitModalOpen(true);
        setExitModalSeen(true);
      }
    };

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.href;
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.includes(window.location.host) ||
        href.startsWith("javascript:")
      ) {
        return;
      }
      event.preventDefault();
      setPendingExternalHref(href);
      setExitModalOpen(true);
    };

    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("click", handleClick, true);

    return () => {
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("click", handleClick, true);
    };
  }, [exitModalSeen]);

  useEffect(() => {
    if (exitModalOpen) {
      document.documentElement.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
    };
  }, [exitModalOpen]);

  const handleConfirmExit = () => {
    if (pendingExternalHref) {
      window.location.href = pendingExternalHref;
    }
    setExitModalOpen(false);
    setPendingExternalHref(null);
  };

  const handleCloseExitModal = () => {
    setExitModalOpen(false);
    setPendingExternalHref(null);
  };

  return (
    <ExitIntentModal
      open={exitModalOpen}
      pendingHref={pendingExternalHref}
      onClose={handleCloseExitModal}
      onConfirm={handleConfirmExit}
    />
  );
}
