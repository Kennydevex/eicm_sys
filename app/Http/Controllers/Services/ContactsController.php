<?php

namespace EICM\Http\Controllers\Services;
use Contact;
use EICM\Mail\ToContact;
use Illuminate\Http\Request;
use EICM\Http\Controllers\Controller;
use Mail;
class ContactsController extends Controller
{
  public function sendMessages(Request $request)
  {


    // ===========================Datas========================
    $contact = new Contact();
    $contact->subject = $request->subject;

    if ($request->otherSubject && $request->subject == 'Outros') {
      $contact->subject = $request->subject.' - '.$request->otherSubject;
    }

    $contact->name = $request->name;
    $contact->from = $request->from;
    $contact->to = $request->to;
    $contact->content = $request->content;
    $contact->type = 'tocontact';
    $contact->save();


    Mail::to($contact->to)->send(new ToContact($contact));






  }
}
