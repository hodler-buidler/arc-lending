import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@state/hooks';
import { toast } from 'react-toastify';

import { removeMessage } from '@state/app/actions';

function useAppMessages() {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector(state => state.app);

  useEffect(() => {
    messages.forEach(message => {
      const copyMessage = { ...message };
      dispatch(removeMessage(message));
      
      toast[copyMessage.type](
        copyMessage.content,
        {
          position: "top-center",
          theme: 'dark',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    })
  }, [messages]);
}

export default useAppMessages;
