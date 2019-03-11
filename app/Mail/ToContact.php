<?php

namespace EICM\Mail;
use Contact;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ToContact extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;


    public $contact;
    /**
    * Create a new message instance.
    *
    * @return void
    */
    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    /**
    * Build the message.
    *
    * @return $this
    */
    public function build()
    {
        return $this->from($this->contact->from)
        ->view('services.mails.toContact')->subject($this->contact->subject);
    }
}
