import { eventService } from "../../services/event.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useGetEvent(id) {
  const { data } = useQuery({
    queryKey: ["event", id],
    queryFn: () => eventService.getEventById(id),
  });

  const [event, setEvent] = useState(data?.data);

  useEffect(() => {
    setEvent(data?.data);
  }, [data?.data]);

  return { event, setEvent };
}
