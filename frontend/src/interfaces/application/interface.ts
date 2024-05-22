import { Dispatch, SetStateAction } from "react";

export interface Application {
    clients: []
    inboundCase: any
}

export interface Responses {
    text: string,
    time: number,
    confidence: number
}
export interface CaseData {
    commitment: string,
    final_sip_code: number,
    got_promise: boolean,
    responses: Responses[],
    result_id: number,
    transcription: Responses[]
}

export interface OpenModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>;
  }