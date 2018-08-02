<?php

namespace EICM\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
  /**
  * Determine if the user is authorized to make this request.
  *
  * @return bool
  */
  public function authorize()
  {
    return true;
  }

  /**
  * Get the validation rules that apply to the request.
  *
  * @return array
  */
  public function rules()
  {
    return [
      'first_name' => 'required|string|max:255',
      'last_name' => 'required|string|max:255',
      'username' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:folks',
      'password' => 'required|string|min:6',
      'gender'=>'in:M,F,Other'
    ];
  }

  // public function messages()
  // {
  //   return [
  //     'title.required' => 'A title is required',
  //     'body.required'  => 'A message is required',
  //   ];
  // }
}
