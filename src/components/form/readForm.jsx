import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FaFilePdf } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { API_URL } from "@/constants/constant";
//

const ReadForm = ({
  defaultValues,
  Fields,
  title1,
  title2,
  titleLink1,
  titleLink2,
}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={titleLink1}>{title1}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={titleLink2}>Read</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Read {title1}</h3>
        <p className="text-md text-gray-600">
          View the details of the {title1.toLowerCase()} below.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-4">
        {Fields.map((field) => {
          return (
            <div key={field.name}>
              {field?.type === "file" ? (
                <div>
                  <Label>{field.label}</Label>
                  {field.accept === "pdf/*" ? (
                    <a href={defaultValues[field.name]}>
                      <FaFilePdf className="text-destructive h-10 w-10" />
                      {defaultValues[field.name]}
                    </a>
                  ) : (
                    <img
                      src={`${API_URL}/${defaultValues[field.name]}`}
                      alt={field.label}
                      className="w-40 h-40 object-cover"
                    />
                  )}
                </div>
              ):field?.type === "jodit" ? (
                <div className="row-span-2">
                  <Label>{field.label}</Label>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: defaultValues[field.name],
                    }}
                  />
                </div>
              )
               : field?.type === "textarea" ? (
                <div>
                  <Label>{field.label}</Label>
                  <Textarea value={defaultValues[field.name]} readOnly />
                </div>
              ) : (
                <div>
                  <Label>{field.label}</Label>
                  <Input
                    value={
                      field.name === "tenure" &&
                      defaultValues[field.name]?.title
                        ? defaultValues[field.name].title // Show title for tenure
                        : defaultValues[field.name]
                    }
                    readOnly
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReadForm;
