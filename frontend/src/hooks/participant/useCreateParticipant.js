import { useMutation, useQueryClient } from "@tanstack/react-query";
import {participantService} from "../../services/participant.service";

export function useCreateParticipant() {
  const queryClient = useQueryClient();

  const { mutate: createParticipant } = useMutation({
    mutationKey: ["create event"],
    mutationFn: (data) => participantService.createParticipant(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["participants"],
      });
    },
  });

  return { createParticipant };
}
