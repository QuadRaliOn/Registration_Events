import { useEffect, useState } from "react";
import { participantService } from "../../services/participant.service";
import { useParams } from "react-router-dom";
import Pagination from "../../components/UI/Pagination";
import { calcCurrentPageElements } from "../../utils/calcCurrentPageElements";
import { useGetEvent } from "../../hooks/event/useGetEvent";
import { useForm } from "react-hook-form";
import RegistrationChart from "../../components/RegistrationChart";
import PopupEventRegistrationApp from "../../components/UI/Popup";
import { Link } from "react-router-dom";
import { ArrowShortBack } from "../../components/UI/icons/icons";

const EventParticipants = () => {
  const { register, watch } = useForm();
  const [registrationChartPopupIsOpen, setRegistrationChartPopupIsOpen] =
    useState(false);

  let { id } = useParams();
  const [participants, setParticipants] = useState();
  const { event } = useGetEvent(id);
  const [currentPage, setCurrentPage] = useState(1);
  const participantsPerPage = 12;

  const { totalPages, currentElements } = calcCurrentPageElements(
    participants,
    currentPage,
    participantsPerPage
  );

  useEffect(() => {
    async function fetchFilteredParticipants() {
      setCurrentPage(1);
      try {
        const response = await participantService.getEventParticipants(
          id,
          watch("searchString")
        );
        setParticipants(response.data);
        console.log(response);
      } catch (e) {
        console.log(e.message);
      }
    }

    fetchFilteredParticipants();
  }, [watch("searchString")]);

  return (
    <>
      <Link className="absolute top-10 left-10 text-black" to={"/"}>
        <ArrowShortBack className="w-10" />
      </Link>

      <div>
        <div className="flex justify-between gap-4 items-center">
          <h1 className="mb-10">{`"${event && event.title}"`} participants</h1>
          <div>
            <button
              className="bg-blue-500 text-white whitespace-nowrap"
              onClick={() => setRegistrationChartPopupIsOpen(true)}
            >
              Registration bar chart
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <input
            autoComplete="off"
            placeholder="Search"
            className="bg-slate-100 px-6 py-2 mb-8"
            type="text"
            {...register("searchString")}
          />
        </div>
        {currentElements?.length ? (
          <div className="flex flex-wrap gap-8">
            {currentElements.map((participant) => (
              <div
                key={Math.random()}
                className="basis-[280px] grow-0 shadow-sm shadow-slate-300 p-6 rounded-sm"
              >
                <h2>
                  {participant.firstName} {participant.lastName}
                </h2>
                <p className="truncate max-w-[230px]">{participant.email}</p>
              </div>
            ))}
          </div>
        ) : <h2 className="absolute left-[45%] top-1/2 italic text-slate-400">There are no participants.</h2>
      }

        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      {registrationChartPopupIsOpen && (
        <PopupEventRegistrationApp
          popupIsOpen={registrationChartPopupIsOpen}
          closePopup={() => setRegistrationChartPopupIsOpen(false)}
        >
          <RegistrationChart eventId={event.id} />
        </PopupEventRegistrationApp>
      )}
    </>
  );
};

export default EventParticipants;
