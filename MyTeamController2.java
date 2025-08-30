package spring.lab.springlab.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import spring.lab.springlab.domain.TeamDTO;
import spring.lab.springlab.domain.TeamMemberVO;

@Controller
public class MyTeamController2 {
	@GetMapping("/myTeamMain")
    public String myTeamMain() {
        return "myTeamAjaxView"; 
    }
	@ResponseBody 
	@GetMapping(value = "/myTeamData", produces = "application/json; charset=utf-8" )
	public TeamDTO teamMyong( @RequestParam(value = "mode", required = false) String mode){
		TeamDTO dto = new TeamDTO();
		if("teamName".equals(mode)) {
		dto.setTeamName("Seedz");
	}
	else if ("ourTeam".equals(mode)){
		 List<TeamMemberVO> teamMembers = new ArrayList<>();
         teamMembers.add(new TeamMemberVO("이승찬", "빡빡이", "볶음밥"));
         teamMembers.add(new TeamMemberVO("이혜성", "혜성특급", "라면"));
         teamMembers.add(new TeamMemberVO("양윤모", "이병 성윤모", "음식"));
         dto.setTeamMember(teamMembers);
	}
	else {
        dto.setTeamName("알 수 없는 팀");
    }
    return dto;
	}
	
}
