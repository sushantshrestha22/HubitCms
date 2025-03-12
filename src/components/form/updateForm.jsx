import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import { Textarea } from "../ui/textarea";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { API_URL } from "@/constants/constant";
import Loading from "../loading";

export function UpdateForm({
  fields,
  defaultValue,
  onSubmit,
  validationSchema,
  title1,
  title2,
  titleLink1,
  titleLink2,
  isSubmitting,
}) {
  const form = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValue,
  });

  const fileInputRefs = useRef({});
  const [filePreviews, setFilePreviews] = useState({});

  const handleFileChange = (e, name) => {
    const file = e.target.files[0];
    form.setValue(name, file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreviews((prev) => ({ ...prev, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDelete = (name) => {
    form.setValue(name, "");
    if (fileInputRefs.current[name]) {
      fileInputRefs.current[name].value = "";
    }
    setFilePreviews((prev) => ({ ...prev, [name]: "" }));
  };

  // console.log(filePreviews["image"] ? `${filePreviews["image"]}` : null);
  const handleSubmit = async (data) => {
    onSubmit(data);
  };

  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={titleLink1}>{title1}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={titleLink2}>Update</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Update {title1}
        </h3>
        <p className="text-md text-gray-600">
          Update the details of the {title1.toLowerCase()} below.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          {fields.map((item) => (
            <FormField
              control={form.control}
              name={item.name}
              key={item.name}
              render={({ field, fieldState }) => (
                <FormItem>
                  {item.disable ? (
                    <FormLabel className="flex items-center gap-4">
                      {item.label}
                      <FormDescription>
                        <Link to={item.link} className="capitalize text-accent mr-1">
                          Click Here
                        </Link>
                        {item.description}
                      </FormDescription>
                    </FormLabel>
                  ) : (
                    <FormLabel>{item.label}</FormLabel>
                  )}
                  <FormControl>
                    {item.type === "select" ? (
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                        value={field.value || ""}
                      >
                        <SelectTrigger>
                          <SelectValue>
                            {item.options.find(
                              (option) => option.value === field.value
                            )?.label ||
                              field.value ||
                              "Select..."}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>{item.label}</SelectLabel>
                            {item.options.map((option) => (
                              <SelectItem
                                value={option.value}
                                key={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : item.type === "checkbox" ? (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={item.name}
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                        <FormLabel htmlFor={item.name}>{item.label}</FormLabel>
                      </div>
                    ) : item.type === "jodit" ? (
                      <JoditEditor
                        value={field.value}
                        config={{
                          readonly: false,
                          toolbar: true,
                          height: 300,
                          buttons:
                            "bold,strikethrough,underline,italic,|,ul,ol,|,indent,|,font,fontsize,brush,paragraph,|,image,video,table,link,|,paste,pastetext,pasteword,|,hr,symbol,fullsize,print",
                        }}
                        placeholder={field.placeholder || ""}
                        tabIndex={1}
                        onBlur={(newContent) => field.onChange(newContent)}
                      />
                    ) : item.type === "textarea" ? (
                      <Textarea
                        placeholder={item.label}
                        value={field.value}
                        {...field}
                      />
                    ) : item.type === "file" ? (
                      <div>
                        {field.value ? (
                          <div>
                            {item.accept === "pdf/*" ? (
                              <Link to={field.value} target="_blank">
                                <FaFilePdf className="text-destructive h-10 w-10" />
                                {field.value}
                              </Link>
                            ) : (
                              <>
                                {filePreviews["image"] ? (
                                  <img
                                    src={`${filePreviews["image"]}`}
                                    alt="localImage"
                                    className=" w-40 "
                                  />
                                ) : (
                                  <img
                                    src={`${API_URL}/${field.value}`}
                                    alt="serverImage"
                                    className=" w-40 "
                                  />
                                )}
                              </>
                            )}
                            <Button
                              variant="destructive"
                              onClick={() => handleFileDelete(item.name)}
                            >
                              <Trash />
                            </Button>
                          </div>
                        ) : (
                          <Input
                            type="file"
                            accept={item.accept || "image/*"}
                            name={item.name}
                            ref={(el) =>
                              (fileInputRefs.current[item.name] = el)
                            }
                            onChange={(e) => handleFileChange(e, item.name)}
                          />
                        )}
                      </div>
                    ) : item.disable ? (
                      <Input
                        type={item.type}
                        placeholder={item.label}
                        {...field}
                        disabled
                      />
                    ) : (
                      <Input
                        type={item.type}
                        placeholder={item.label}
                        {...field}
                      />
                    )}
                  </FormControl>
                  <FormMessage>
                    {fieldState.error ? fieldState.error.message : null}
                  </FormMessage>
                </FormItem>
              )}
            />
          ))}
          {isSubmitting ? (
            <Button type="button" size="icon" disable="true" className="lg:col-span-2">
              <Loading login="true" />
            </Button>
          ) : (
            <Button type="submit" className="lg:col-span-2">
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}
