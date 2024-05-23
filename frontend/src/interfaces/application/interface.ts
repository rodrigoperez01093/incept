import { Dispatch, SetStateAction } from "react";
import { User } from "../general";

export interface Application {
    clients: ClientsState[]
    inboundCase: any
}

export interface ClientsState {
    id: number,
    name: string,
    alias: string,
    users: User[]
}

export interface InboundState {
    count: number,
    next: string,
    previous: any,
    results: any[] 
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