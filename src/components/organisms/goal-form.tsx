import { useState } from "react";
import { Field, Formik } from "formik";
import { Button } from "..";
import toast from "react-hot-toast";



export const GoalForm = () => {
  const [category, setCategory] = useState<string>()
  const [model, setModel] = useState<string>()
  const [yearOfManufacture, setYearOfManufacture] = useState<string>()
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()


  const submit = async () => {
 console.log("what happening");
 
    var promtString =model + " " + description + " from " + yearOfManufacture;

    console.log("test submit prompt",promtString)
    // userService.signInWithEmail({ email }).then((res) => {
    //   if (Boolean(res)) {
    //     toast.error("Email not found", {
    //       duration: 4000,
    //     });
    //   } else {
    //     toast.success("Email sent, please check your inbox", {
    //       duration: 4000,
    //     });
    //   }
    // });
  };


  const initialValues = {
    category: "",
    model: "",
    yearOfManufacture: "",
   description:""
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={submit}

    >
      {({ values ,handleBlur}) => (
        <form className="text-black flex flex-col items-center justify-center gap-8">
          <select
            name="categories"
            value={category}
            onChange={(value) => setCategory(value.target.value)}
             onBlur={handleBlur('category')}
            style={{ display: "block" }}
            className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
          >
            <option value="" label="Select a Category">
              Select a Category
            </option>
            <option value="car" label="Car">
              Car
            </option>
            <option value="home" label="Home">
              Home
            </option>
          </select>
          {category === "car" && (
            <>
              <select
                name="model"
                value={model}
                onChange={(value) => setModel(value.target.value)}
                 onBlur={handleBlur('model')}
                style={{ display: "block" }}
                className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
              >
                <option value="" label="Select a Model">
                  Select a Model
                </option>
                <option value="bmw" label="BMW">
                  BMW
                </option>
                <option value="audi" label="Audi">
                  Audi
                </option>
                <option value="toyota" label="Toyota">
                  Audi
                </option>
              </select>

              <select
                name="yearOfManufacture"
                value={yearOfManufacture}
                onChange={(value) => setYearOfManufacture(value.target.value)}
                // onBlur={handleBlur}
                style={{ display: "block" }}
                className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
              >
                <option value="" label="Select a year">
                  Select year
                </option>
                <option value="2022" label="2022">
                  2022
                </option>
                <option value="2021" label="2021">
                  2021
                </option>
                <option value="2020" label="2020">
                  2020
                </option>
              </select>
              {model === "audi" && yearOfManufacture === "2022" && (
                //car bmw 2022
                <>
                  <select
                    name="description"
                    value={description}
                    onChange={(value) => setDescription(value.target.value)}
                    // onBlur={handleBlur}
                    style={{ display: "block" }}
                    className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
                  >
                    <option value="" label="Select car description">
                      Select year{" "}
                    </option>
                    <option value="Audi A3 Sedan" label="Audi A3 Sedan">
                    Audi A3 Sedan
                    </option>
                    <option value="BMW 3 Series" label="BMW 3 Series">
                    Audi S3 Sedan
                    </option>
                    <option value="Audi A4 Sedan" label="Audi A4 Sedan">
                    Audi A4 Sedan
                    </option>
                  </select>
                </>

              )}
              {model === "bmw" && yearOfManufacture === "2022" && (
                //car bmw 2022
                <>
                  <select
                    name="description"
                    value={description}
                    onChange={(value) => setDescription(value.target.value)}
                    // onBlur={handleBlur}
                    style={{ display: "block" }}
                    className="bg-[#E9E4E4] px-5 py-2 rounded-xl w-96"
                  >
                    <option value="" label="Select car description">
                      Select year{" "}
                    </option>
                    <option value="BMW 2 Series Gran Coupe" label="BMW 2 Series Gran Coupe">
                      BMW 2 Series Gran Coupe
                    </option>
                    <option value="BMW 3 Series" label="BMW 3 Series">
                    BMW 3 Series
                    </option>
                    <option value="BMW 4 Series Gran Coupe" label="BMW 4 Series Gran Coupe">
                    BMW 4 Series Gran Coupe
                    </option>
                  </select>
                </>

              )}
            </>
          )}

          <Button
            className="loginBtn w-80 text-3xl"
            onClick={(e) => {
              //e.preventDefault();
              toast.loading("Goal added...");
              submit();
            }}
            shape="rounded"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};
