package com.example.kommunevalg_frontend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class CandidateController {


    //CREATE

    @GetMapping("/create_candidate")
    public String addCandidate(){
        return "create_candidate";
    }

    @PostMapping("/creating_candidate")
    public String creatingCandidate(@RequestParam(name="candidate_name") String navn){

        return "redirect:/candidate_created/" + navn;
    }

    @GetMapping("/candidate_created/{name}")
    public String candidateCreated(@PathVariable(name = "name") String navn, Model model){
        model.addAttribute("candidate_name", navn);
        return "candidate_created";
    }


    //UPDATE

    @GetMapping("/update_candidate")
    public String updateCandidate(){
        return "update_candidate";
    }

    @PutMapping("/updating_candidate")
    public String updatingCandidate(){
        return "redirect:/candidate_updated";
    }

    @GetMapping("/candidate_updated")
    public String candidateUpdated(){
        return "candidate_updated";
    }


    //DELETE

    @GetMapping("/delete_candidate")
    public String deleteCandidate(){
        return "delete_candidate";
    }


    @DeleteMapping("/deleting_candidate")
    public String deletingCandidate(){
        return "redirect:/candidate_deleted";
    }


    @GetMapping("/candidate_deleted")
    public String candidateDeleted(){
        return "candidate_deleted";
    }




}
