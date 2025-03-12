import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import JoditEditor from "jodit-react";
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
import { Textarea } from "../ui/textarea";
import { useRef } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Loading from "../loading";

export function CreateUserForm({
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

  // ...
  const fileInputRefs = useRef({});

  const handleFileChange = (e, name) => {
    const file = e.target.files[0];
    form.setValue(name, file);
  };

  const handleSubmit = async (data) => {
    onSubmit(data);
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={titleLink1}>{title1}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={titleLink2}>Create</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Create {title1}
        </h3>
        <p className="text-md text-gray-600">
          Fill out the form below to create a new {title1.toLowerCase()}.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {fields.map((item) => (
            <FormField
              control={form.control}
              name={item.name}
              key={item.name}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{item.label}</FormLabel>
                  <FormControl>
                    {item.type === "select" ? (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your opition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="capitalize">{item.name}</SelectLabel>
                            {item.options.map((option) => (
                              <SelectItem
                                value={option.value}
                                key={option.value}
                              >
                                <div></div>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : item.type === "jodit" ? (
                      <JoditEditor
                        {...field}
                        value={field.value}
                        placeholder={field.placeholder || ""}
                        tabIndex={1}
                        onBlur={(newContent) =>
                          form.setValue(field.name, newContent)
                        }
                      />
                    ) : item.type === "file" ? (
                      <Input
                        type="file"
                        accept={item.accept || "image/*"}
                        name={item.name}
                        ref={(el) => (fileInputRefs.current[item.name] = el)}
                        onChange={(e) => handleFileChange(e, item.name)}
                      />
                    ) : item.type === "textarea" ? (
                      <Textarea placeholder={item.label} {...field} />
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
            <Button type="button" size="icon" disable="true">
              <Loading login="true" />
            </Button>
          ) : (
            <Button type="submit" className="lg:col-span-2">Submit</Button>
          )}
        </form>
      </Form>
    </>
  );
}
