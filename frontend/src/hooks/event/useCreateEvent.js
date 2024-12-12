import { useMutation, useQueryClient } from "@tanstack/react-query";
import {eventService} from "../../services/event.service";

export function useCreateEvent() {
  const queryClient = useQueryClient();

  const { mutate: createEvent } = useMutation({
    mutationKey: ["create event"],
    mutationFn: (data) => eventService.createEvent(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
  });

  return { createEvent };
}
