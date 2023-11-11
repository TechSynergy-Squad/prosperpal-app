import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router";

import { Button, Panel } from "../atoms";
import toast from "react-hot-toast";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Button
        className="px-5 w-16 text-xs"
        shape="rounded"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Delete
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <section className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel>
            <Panel>
              <Dialog.Title className="text-red-500 text-xl font-bold my-2 font-mono">
                Deleting account
              </Dialog.Title>

              <Dialog.Description className="text-gray-500">
                This will permanently delete your account
              </Dialog.Description>

              <p className="my-2 text-gray-500">
                Are you sure you want to delete your profile? All of your data
                will be permanently removed. This action cannot be undone.
              </p>

              <section className="modal-actions flex gap-4 justify-start">
                <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button
                  onClick={() => {
                    toast.success("Account successfully deleted", {
                      duration: 5000,
                    });
                    setIsOpen(false);
                    navigate("/register");
                  }}
                  shape="rounded"
                  className="px-2"
                >
                  Delete Account
                </Button>
              </section>
            </Panel>
          </Dialog.Panel>
        </section>
      </Dialog>
    </>
  );
};
