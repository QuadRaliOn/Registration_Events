import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { splitFullName } from "../../utils/splitFullName";
import { useCreateParticipant } from "../../hooks/participant/useCreateParticipant";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowShortBack } from "../../components/UI/icons/icons";

const EventRegistration = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  let { id } = useParams();
  const { createParticipant } = useCreateParticipant();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = (data) => {
    console.log(data);
    const { firstName, lastName } = splitFullName(data.fullName);
    const participant = {
      firstName,
      lastName,
      source: data.source,
      email: data.email,
      eventId: id,
      birthDate: date,
    };
    console.log(participant);
    createParticipant(participant);
    navigate(`/event/${id}/participants`);
  };
  function handleDateChange(date) {
    date.setHours(0, 0, 0, 0);
    setDate(date);
  }

  function errorMessage(errorInput) {
    if (errorInput?.type === "required") {
      return <span className="text-red-500">This field is required</span>;
    }

    if (errorInput?.type === "maxLength")
      return <span className="text-red-500">Maximum length reached</span>;

    if (errorInput?.type === "pattern") {
      return (
        <span className="text-red-500">
          Please enter a valid full name with two or more words
        </span>
      );
    }
  }

  return (
    <div className="flex justify-center">
      <Link className="absolute top-10 left-10 text-black" to={"/"}>
        <ArrowShortBack className="w-10" />
      </Link>
      <div>
        <h1 className="mb-14">Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-8 flex-col">
          <div className="flex flex-col gap-1">
            <label className="text-slate-400">Full Name</label>
            <input
              className="p-3 bg-slate-100"
              type={"text"}
              placeholder="Joe Doe"
              {...register("fullName", {
                required: true,
                maxLength: 20,
                pattern: {
                  value: /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/,
                },
              })}
            />
            {errors.fullName && errorMessage(errors.fullName)}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-400">Email</label>
            <input
              className="p-3 bg-slate-100"
              type={"email"}
              placeholder="example@gmail.com"
              {...register("email", { required: true })}
            />
            {errors.email && errorMessage(errors.email)}
          </div>
          <div>
            <label className="mr-5 text-slate-400">Date of birth</label>
            <DatePicker
              className="p-3 flex w-[250px] bg-slate-100"
              selected={date}
              onChange={handleDateChange}
              showPopperArrow={false}
            />
          </div>

          <div>
            <label className="mb-4 inline-block text-slate-400">
              Where did you hear about this event?
            </label>
            <div className="flex gap-4">
              <label className="flex gap-2" htmlFor="friends">
                <input
                  {...register("source", { required: true })}
                  type="radio"
                  id="friends"
                  value="friends"
                />
                Friends
              </label>
              <label htmlFor="soc-media" className="flex gap-2">
                <input
                  {...register("source")}
                  type="radio"
                  id="soc-media"
                  value="soc-media"
                />
                Social Media
              </label>
              <label className="flex gap-2" htmlFor="myself">
                <input
                  {...register("source")}
                  type="radio"
                  id="myself"
                  value="myself"
                />
                Found myself
              </label>
            </div>
            {errors.source && errorMessage(errors.source)}
          </div>

          <input
            onClick={console.log(errors)}
            className="inline-block bg-blue-400 text-white p-5 rounded-lg cursor-pointer hover:bg-blue-500"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default EventRegistration;
