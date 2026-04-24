export default function NotificationCard({notification}){
    return (<div key={notification.id} class="w-100% mx-3 m-3">
        <div class={`rounded-2xl ${(notification.status)?'bg-red-500':'bg-slate-500'}`}>
            <div class={`${(notification.status)?'bg-slate-100':'bg-rose-100'} translate-x-1 rounded-2xl p-2 mx-1`}>
                    <div class='flex ml-1'>
                        <div class='font-bold text-xl'>{notification.header}</div>
                        <div class='text-sm my-auto ml-auto'>{notification.time}</div>
                    </div>
                <div class='text-slate-500 my-2'>{notification.message}</div>
            </div>
        </div>
    </div>)
}