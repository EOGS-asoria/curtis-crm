import React from "react";
import TicketsDetailsMoveAssignComponents from "../components/tickets-details-move-assign-components";
import {
    ArrowsRightLeftIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    InboxStackIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export default function TicketsDetailsMoveAssignSection() {
    const { ticket } = useSelector((state) => state.customer_tickets);
    return (
        <div className="px-7">
            {ticket.status !== "WARRANTY VALIDATION" && ticket.status !== "CLOSED" && ticket.isUploading == "true" && (
                <div>
                    {ticket?.call_type &&
                    ticket?.call_type == "CF-Warranty Claim" ? (
                        <div className="flex gap-3">
                            {ticket?.status !== "RESOURCE" && (
                                <TicketsDetailsMoveAssignComponents
                                    ticket={ticket}
                                    name="MOVE TO RESOURCE"
                                    value="RESOURCE"
                                    icon={<InboxStackIcon className="h-6" />}
                                    link="decision"
                                />
                            )}

                            {ticket?.status !== "REPAIR" && (
                                <TicketsDetailsMoveAssignComponents
                                    ticket={ticket}
                                    name="MOVE TO REPAIR"
                                    value="REPAIR"
                                    icon={
                                        <WrenchScrewdriverIcon className="h-6" />
                                    }
                                    link="repair"
                                />
                            )}

                            {ticket?.status !== "REFUND" && (
                                <TicketsDetailsMoveAssignComponents
                                    ticket={ticket}
                                    name="MOVE TO REFUND"
                                    value="REFUND"
                                    icon={<BanknotesIcon className="h-6" />}
                                    link="refund"
                                />
                            )}

                            {ticket?.status !== "REPLACEMENT" && (
                                <TicketsDetailsMoveAssignComponents
                                    ticket={ticket}
                                    name="MOVE TO REPLACEMENT"
                                    value="REPLACEMENT"
                                    icon={
                                        <ArrowsRightLeftIcon className="h-6" />
                                    }
                                    link="replacement"
                                />
                            )}

                            {ticket?.status !== null && (
                                <TicketsDetailsMoveAssignComponents
                                    ticket={ticket}
                                    name="MOVE TO VALIDATION"
                                    value={
                                        ticket.call_type == "CF-Warranty Claim"
                                            ? "WARRANTY VALIDATION"
                                            : ticket.call_type == "Parts"
                                            ? "PARTS VALIDATION"
                                            : "TECH VALIDATION"
                                    }
                                    icon={<CheckBadgeIcon className="h-6" />}
                                    link="warranty_validation"
                                />
                            )}
                        </div>
                    ) : (
                        <div className="flex gap-3 mb-4">
                            {ticket?.status !== "REPLACEMENT PARTS" && (
                                <TicketsDetailsMoveAssignComponents
                                    ticket={ticket}
                                    name="MOVE TO REPLACEMENT PARTS"
                                    value="REPLACEMENT PARTS"
                                    icon={<InboxStackIcon className="h-6" />}
                                    link="replacement_parts"
                                />
                            )}
                            {ticket?.status !== "PARTS VALIDATION" && (
                                <TicketsDetailsMoveAssignComponents
                                    ticket={ticket}
                                    name="MOVE TO PARTS VALIDATION"
                                    value="PARTS VALIDATION"
                                    link="parts_validation"
                                    icon={
                                        <WrenchScrewdriverIcon className="h-6" />
                                    }
                                />
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
