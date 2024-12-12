import { Link } from "react-router-dom";
import { useState } from "react";
import { useEvents } from "../../hooks/event/useEvents";
import { calcCurrentPageElements } from "../../utils/calcCurrentPageElements";
import Pagination from "../../components/UI/Pagination";
import { useForm } from "react-hook-form";

const Events = () => {
  const { items } = useEvents();
  console.log(items);

  const [currentPage, setCurrentPage] = useState(1);
  const participantsPerPage = 8;
  const { totalPages, currentElements } = calcCurrentPageElements(
    items,
    currentPage,
    participantsPerPage
  );

  const { register, watch } = useForm();
  console.log(watch("sort"));

  function getSortedEvents(items) {
    switch (watch("sort")) {
      case "title":
        return items.sort((a, b) => a.title.localeCompare(b.title));
      case "date":
        return items.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "organizer":
        return items.sort((a, b) =>
          b.organizer.name.localeCompare(a.organizer.name)
        );

      default:
        return items;
    }
  }

  return (
    <div>
      <h1 className="mb-1">Events</h1>
      <div className="flex justify-center mb-6 ">
        <div className="relative inline-block bg-slate-100 rounded-sm">
          <span className="filter-label absolute inset-0 flex items-center pl-4 mr-3 pointer-events-none text-slate-500">
            sort
          </span>
          <select 
            className="bg-slate-100 appearance-none px-3 pl-12 py-2 text-slate-500"
            {...register("sort")}
          >
            <option value="date">by date</option>
            <option value="title">by title</option>
            <option value="organizer">by organizer</option>
          </select>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap">
        {items &&
          getSortedEvents(currentElements).map((event) => (
            <div
              className="basis-[270px] grow-0 shadow-sm shadow-slate-300 p-5 rounded-sm flex flex-col gap-1s"
              key={Math.random()}
            >
              <h2 className="text-md">{event.title}</h2>
              <p className="text-slate-400 basis-full mb-2">{event.description}</p>
              <div className="flex justify-between gap-4">
                <Link
                  to={`/event/${event.id}/registration`}
                  className="text-blue-500"
                >
                  Register
                </Link>
                <Link
                  to={`/event/${event.id}/participants`}
                  className="text-blue-500"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Events;
