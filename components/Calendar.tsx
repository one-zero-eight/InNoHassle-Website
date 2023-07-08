"use client";
import { EventApi } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import momentPlugin from "@fullcalendar/moment";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment/moment";
import { useMemo } from "react";
import iCalendarPlugin from "./iCalendarPlugin";

function Calendar({
  urls,
  initialView = "listMonth",
  ...props
}: {
  urls: string[];
  initialView?: string;
}) {
  const calendar = useMemo(
    () => (
      <FullCalendar
        eventSources={urls.map((url) => ({ url: url, format: "ics" }))} // Load events by url
        eventsSet={(events) => {
          // Remove duplicates.
          // Accumulate 'extendedProps.calendarURLs' to use it later.
          const unique: Record<string, EventApi> = {};
          for (const event of events) {
            const uniqueId = event.title + event.startStr + event.endStr;
            if (!(uniqueId in unique)) {
              unique[uniqueId] = event;
            } else {
              unique[uniqueId].setExtendedProp(
                "calendarURLs",
                (
                  unique[uniqueId].extendedProps.calendarURLs as string[]
                ).concat(event.extendedProps.calendarURLs as string[])
              );
              event.remove();
            }
          }
        }}
        timeZone="Europe/Moscow" // Use the same timezone for everyone
        plugins={[
          momentPlugin,
          dayGridPlugin,
          timeGridPlugin,
          listPlugin,
          interactionPlugin,
          iCalendarPlugin,
        ]}
        initialView={initialView} // Default view
        eventTimeFormat={{
          // Use 24-hour format
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false,
        }}
        slotLabelFormat={{
          // Use 24-hour format
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false,
        }}
        headerToolbar={{
          // Buttons in header
          left: "prev,next",
          center: "title",
          right: "listMonth,timeGridWeek,dayGridMonth",
        }}
        titleFormat={(arg) => {
          if (arg.date.year === new Date().getFullYear()) {
            // Show only month if current year
            return moment(arg.date).format("MMMM");
          } else {
            // Show month and year otherwise
            return moment(arg.date).format("MMMM YYYY");
          }
        }}
        views={{
          timeGridWeek: {
            // Show weekday and date in day header
            dayHeaderFormat: "ddd D",
          },
        }}
        allDaySlot={false} // Do not display "all day" events
        // displayEventEnd={true} // Display end time
        nowIndicator={true} // Display current time as line
        firstDay={1} // From Monday
        navLinks={true} // Dates are clickable
        weekNumbers={true} // Display numbers of weeks
        weekNumberFormat={{ week: "long" }} // Show "Week 1", not "W1"
        weekNumberClassNames="text-sm" // Small text size
        // weekNumberCalculation={calculateWeek} // Display academic week numbers
        // height="100dvh" // Full height
        contentHeight="auto" // Do not add scrollbar
        stickyHeaderDates={false}
        eventInteractive={true} // Make event tabbable
        eventClassNames="cursor-pointer text-sm" // Show that events are clickable
        // eventClick={(info) => {
        //   info.jsEvent.preventDefault();
        //   console.log(info);
        // }}
        scrollTime="07:30:00" // Scroll to 7:30am on launch
        scrollTimeReset={false} // Do not reset scroll on date switch
        noEventsContent={() => "No events this month"} // Custom message
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [urls.join(";")]
  );

  return (
    <div className="text-text-main" {...props}>
      {calendar}
    </div>
  );
}

export default Calendar;
