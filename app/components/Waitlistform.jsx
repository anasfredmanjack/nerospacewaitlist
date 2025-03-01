'use client';
import React, { useState } from "react";
import { 
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Form, Input, Button,Spinner
} from "@heroui/react";

export default function App() {
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); 
  const { isOpen: isErrorOpen, onOpen: onErrorOpen, onOpenChange: onErrorClose } = useDisclosure();
  const { isOpen: isSuccessOpen, onOpen: onSuccessOpen, onOpenChange: onSuccessClose } = useDisclosure();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); //start preloader
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const newErrors = {};

    if (!data.name) newErrors.name = "Please enter your name";
    if (!data.email) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setErrorMessage("Please fill in all required fields correctly.");
      setLoading(false);//stop preloader
      onErrorOpen(); // Show error modal
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setErrorMessage("Failed to submit form. Please try again.");
        onErrorOpen(); // Show error modal
        setLoading(false);
        throw new Error("Failed to submit form.");
      }

      setErrors({});
      setLoading(false); //stop preloader
      setSuccessMessage("You have successfully joined the Nerospace waitlist! Stay tuned for more updates 🎉");
      onSuccessOpen(); // Show success modal

    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false); //stop preloader
      setErrorMessage("An error occurred while submitting the form. Please try again.");
      onErrorOpen(); // Show error modal

    }
  };

  return (
    <>
      {/* Error Modal */}
      <Modal isOpen={isErrorOpen} onOpenChange={onErrorClose} className="border-[#831291] border-2">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black border-b-2 border-[#831291]">❌ Submission Error</ModalHeader>
              <ModalBody>
                <p className="text-red-500">{errorMessage}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Success Modal */}
      <Modal isOpen={isSuccessOpen} onOpenChange={onSuccessClose} className="border-green-600 border-2">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black border-b-2 border-green-600">✅ Success!</ModalHeader>
              <ModalBody>
                <p className="text-green-600">{successMessage}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="light" onPress={onClose}>
                  Okay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Form Section */}
      <div className="flex h-full w-full justify-center items-center p-6">
        <div className="bg-white w-fit p-10 rounded-lg shadow-lg flex flex-col items-center">
          <div className='bg-[#A87DD6] text-white p-4 rounded-lg text-center mb-4 max-w-sm'>
            <p>Join the waitlist and be among the first to experience the future of Web3 freelancing with Nerospace.</p>
          </div>
          <Form className="w-full space-y-4" validationErrors={errors} onSubmit={onSubmit}>
            <div className="mt-3 w-full text-black">
              <Input
                isRequired
                errorMessage={errors.name}
                label="Name"
                labelPlacement="outside"
                name="name"
                color="black"
                placeholder="Enter your name"
                className="w-full"
              />
            </div>
            <div className="mt-3 w-full text-black">
              <Input
                isRequired
                errorMessage={errors.email}
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
                color="black"
                className="w-full"
              />
            </div>
            <Button type="submit" variant="bordered" className="w-full text-[#542585] border-[#542585] hover:bg-[#542585] hover:text-white transition-all"
            isDisabled={loading} //Disable Button whhen preloader is loading
            >
               {loading ? <Spinner size="sm" className="text-[#542585]"/> : "Join Waitlist"} 
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
