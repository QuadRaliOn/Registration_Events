import { participantService } from "../../services/participant.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useGetRegistrationsByDate(eventId) {
  const { data } = useQuery({
    queryKey: ["days"],
    queryFn: () => participantService.getRegistrationsByDay(eventId),
  });

  const [days, setDays] = useState(data?.data);

  useEffect(() => {
    setDays(data?.data);
  }, [data?.data]);

  return { days, setDays };
}
