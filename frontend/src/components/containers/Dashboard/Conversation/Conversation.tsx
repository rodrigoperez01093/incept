import React, { Dispatch, SetStateAction } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CaseData, Responses } from '../../../../interfaces/application/interface';
import { Avatar, Button } from '@mui/material';
import moment from 'moment';
import { deepOrange } from '@mui/material/colors';

interface ConversationProps {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  messages: CaseData
}

const Conversation:React.FC<ConversationProps> = ({open, setOpen, messages}) => {

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
  };
  return (
    <>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='relative'
          >
        <Box sx={style} className='scroll-bar'>
            <button className='absolute top-4 right-4' onClick={() => setOpen(false)}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11" stroke="#272727" stroke-linecap="round"/>
                <path d="M11 1L1.00001 11" stroke="#272727" stroke-linecap="round"/>
              </svg>
            </button>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {
              messages?.responses.map((resp:Responses,i:number) => (
                <div key={i}>
                  <div className='text-xs flex items-center justify-start mt-4'>
                    <div className="w-11 h-11 shadow-lg rounded-full flex flex-col flex-none items-center justify-center border">
                      <Avatar sx={{ width: '30px', height: '30px', padding: '2px' }} alt="incept ai" src="/favicon.ico" />  
                    </div>
                    <div className='flex flex-col pl-2'>
                      <span>
                        {resp.text}
                      </span>
                      <span className='text-[10px] text-incept-gray1 mt-2'>{moment.unix(resp.time).utcOffset(24).format('DD-MM-YYYY')}</span>
                    </div>
                  </div>
                  {
                    messages.transcription[i]?.text &&
                    <div className='text-xs flex flex-row items-center justify-end mt-4'>
                      <div className='flex flex-col pr-2 text-right'>
                        <span>
                          {messages.transcription[i]?.text}
                        </span>
                        <span className='text-[10px] text-incept-gray1 mt-2'>{moment.unix(messages.transcription[i]?.time).utcOffset(24).format('DD-MM-YYYY')}</span>
                      </div>
                      <div className="w-11 h-11 shadow-lg rounded-full flex flex-col flex-none items-center justify-center border">
                        <Avatar sx={{ bgcolor: deepOrange[500] }} alt="incept ai" />  
                      </div>
                    </div>
                  }
                </div>
              ))
            }
            </Typography>
            <div className='w-full flex flex-col items-center'>
              <Button id="modal-modal-description" sx={{ mt: 5, bgcolor: '#032133', color: '#FFFFFF', '&:hover': { bgcolor: '#167287'} }} onClick={() => setOpen(false)}>
                Aceptar
              </Button>
            </div>
        </Box>
        </Modal>
    </>
  )
}

export default Conversation