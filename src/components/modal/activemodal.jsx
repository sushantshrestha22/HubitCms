import React, { useCallback } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { editDataa } from "@/query/query";
import toast from "react-hot-toast";

export function StatusModal({ path, isActive}) {
  const handelActive = async () => {
    try {
      await editDataa(path);
      toast.success("Status updated successfully");
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className={isActive==="pending"?"bg-primary text-white p-2 rounded-md":"bg-accent text-white p-2 rounded-md"}>{isActive}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isActive === "pending"
              ? "Are you sure you want to complete?"
              : "Are you sure you want to pending?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isActive === "completed"
              ? "This action will pending the item. You can complete it later"
              : "This action will complete the item. You can pending it later "}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handelActive}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
