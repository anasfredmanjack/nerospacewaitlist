'use client'
import {Form, Input, Button} from "@heroui/react";

export default function App() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
                <div className='bg-[#A87DD6] mt-5 flex bg-opacity-80 opacity-90 p-3 rounded-lg shadow-lg max-w-sm mx-auto '>
                    <p>Join the waitlist and be among the first to experience the future of Web3 freelancing with Nerospace.</p>
                </div>
    <Form className="w-full max-w-sm mt-3" validationBehavior="native" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Button type="submit" variant="bordered" className="w-full text-[#542585] border-[#542585] ">
        Join Waitlist
      </Button>
    </Form>
    </div>
  );
}
