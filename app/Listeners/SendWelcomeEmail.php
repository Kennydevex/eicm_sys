<?php

namespace EICM\Listeners;

use EICM\Events\UserRegistered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;

class SendWelcomeEmail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserRegistered  $event
     * @return void
     */
    public function handle(UserRegistered $event)
    {
        $data = array('name'=>$event->user->name, 'email'=>$event->user->email, 'body'=>'Seja benvindo ao siste da escola EICM');
        Mail::send('Services.Mails.userRegisteredEmail', $data, function($message) use($data)
        {
          $message->to($data['email'])->subject('Welcomo to EICM Sys');
          $message->from('kenny.compra@yahoo.com');
        });
    }
}
