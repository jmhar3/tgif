import { useMemo, useState, useCallback } from "react";
import { Stack, VStack, HStack, useBoolean } from "@chakra-ui/react";

import { ActivityHighlight } from "./ActivityHighlight";
import { RewardCentre } from "./RewardCentre";
import { ActivityButton } from "../../buttons/ActivityButton";
import { ActivityInfoModal } from "../../modals/ActivityInfoModal";
import { useActivities, ActivityData } from "../../../hooks/useActivities";

export const Activities = () => {
  const { activities } = useActivities();

  const [isInfoModalOpen, setIsInfoModalOpen] = useBoolean();
  const [selectedActivity, setSelectedActivity] = useState<ActivityData>();

  const onActivityButtonClick = useCallback(
    (index: number) => {
      const activity = activities.find((activity) => activity.index === index);

      if (activity) {
        setSelectedActivity(activity);
        setIsInfoModalOpen.on();
      }
    },
    [activities, setSelectedActivity, setIsInfoModalOpen]
  );

  const activityButtons = useMemo(() => {
    let activityButtonRows = [];

    for (let i = 0; i < activities.length; i += 3) {
      activityButtonRows.push(
        <HStack spacing="3" w="100%">
          {activities.slice(i, i + 3).map((activity) => (
            <ActivityButton {...activity} onClick={onActivityButtonClick} />
          ))}
        </HStack>
      );
    }

    return activityButtonRows;
  }, [activities]);

  return (
    <>
      <Stack w="100%" spacing="3">
        <Stack w="100%" direction={["column", "row"]} spacing="3">
          <ActivityHighlight />
          <RewardCentre />
        </Stack>

        <VStack spacing="3">{activityButtons}</VStack>
      </Stack>

      {isInfoModalOpen && selectedActivity && (
        <ActivityInfoModal
          isOpen={isInfoModalOpen}
          onClose={setIsInfoModalOpen.off}
          activity={selectedActivity}
        />
      )}
    </>
  );
};
