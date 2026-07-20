import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { loadContent, saveContent, DEFAULT_CONTENT } from "@/lib/contentStore";

export function useSiteContent() {
  const { data, isLoading } = useQuery({
    queryKey: ["siteContent"],
    queryFn: loadContent,
    initialData: DEFAULT_CONTENT,
  });
  return { content: data ?? DEFAULT_CONTENT, isLoading };
}

export function useSaveContent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => saveContent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siteContent"] });
    },
  });
}