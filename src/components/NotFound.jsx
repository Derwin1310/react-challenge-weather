import { Icon } from '@iconify/react';

export const NotFound = () => {
  return (
    <div className='bg-primary text-light shadow-shadow rounded-radius px-8 py-4 flex flex-col gap-4 md:w-1/2 justify-center items-center'>
      <h2 className='text-title '>City not found</h2>
      <Icon icon="bi:clouds-fill" width={"150px"} color={"steelblue"}/>
    </div>
  )
}
