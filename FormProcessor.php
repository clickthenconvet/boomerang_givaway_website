<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class FormProcessor extends CI_Controller {

	public function __construct(){

		parent::__construct();
		$this->load->library('form_validation'); 

		$this->load->helper('email');
		$this->load->model('Log');
		$this->load->model('EmailNotification');


 

	}
	
	
	
	public function contact(){
	    
		if($this->input->server('REQUEST_METHOD') == 'POST'){
		    
			$this->form_validation->set_rules('name','','required');
			$this->form_validation->set_rules('email','','valid_email|required');

			if($this->form_validation->run()){

			    $this->Log->contact($this->input->post());
			    $this->EmailNotification->contact($this->input->post());

			}else{
				$this->output->set_header('HTTP/1.0 400 Bad Request');
			}

		}else{
			$this->output->set_header('HTTP/1.0 400 Bad Request');
		}

		
	}
	
	
	public function audit(){


		if($this->input->server('REQUEST_METHOD') == 'POST'){

			$this->form_validation->set_rules('fname','','required');
			$this->form_validation->set_rules('lname','','required');
			$this->form_validation->set_rules('email','','valid_email|required');
			$this->form_validation->set_rules('budget','','required');
			
			if($this->form_validation->run()){

			    $this->Log->audit($this->input->post());
			    $this->EmailNotification->audit($this->input->post());

			}else{
				$this->output->set_header('HTTP/1.0 400 Bad Request');
			}
		}else{
			$this->output->set_header('HTTP/1.0 400 Bad Request');
		}
		
	}


	public function fbqna(){
		header("Access-Control-Allow-Origin: *");

		

		if($this->input->server('REQUEST_METHOD') == 'POST'){

			$data = $this->input->post();
			
			$url = 'https://script.google.com/macros/s/AKfycbyt5m-eJ7vvrQo17VAkte_x7MpLNE3FiR389XHu_D9gxFUmGHNR/exec';
			
			$options = array(
				'http' => array(
					'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
					'method'  => 'POST',
					'content' => http_build_query($data)
				)
			);
			$context  = stream_context_create($options);
			$result = file_get_contents($url, false, $context);
			if ($result === FALSE) { 
				$this->output->set_header('HTTP/1.0 400 Bad Request');
				exit();
			}
		    $this->EmailNotification->fbqna($data);

		}else{
			$this->output->set_header('HTTP/1.0 400 Bad Request');
		}

		
	}


	

	



}
