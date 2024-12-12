import { eventService } from "../../services/event.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useEvents() {
  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: () => eventService.getEvents(),
  });

  const [items, setItems] = useState(data?.data);

  useEffect(() => {
    setItems(data?.data);
    console.log(data);
  }, [data?.data]);

  return { items, setItems };
}
