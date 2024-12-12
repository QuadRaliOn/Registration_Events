import { participantService } from "../../services/participant.service";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useEventParticipants(id, searchString) {
  const { data } = useQuery({
    queryKey: ["participants"],
    queryFn: () => participantService.getEventParticipants(id, searchString),
  });
  

  const [items, setItems] = useState(data?.data);

  useEffect(() => {
    setItems(data?.data);
    console.log(searchString)
  }, [data?.data, searchString]);

  return { items, setItems };
}
