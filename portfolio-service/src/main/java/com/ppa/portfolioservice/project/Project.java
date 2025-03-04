package com.ppa.portfolioservice.project;

import java.util.Date;
import java.util.List;

public class Project {
    public enum Status {
        ACTIVE, ON_HOLD, INACTIVE, ARCHIVED
    }

    private Long projectId; // Eventually generated by database
    private Long ownerId;
    private String projectName;
    private String projectStatus;
    private String shortDescription;
    private String description;
    private List<String> imageUrls;
    private List<String> collaborators; // ids referring to a user object?. User db would then contain
                                      // the necessary information, github links etc. No personal
                                      // user data should be stored in project object.
                                      // Maybe should be a generic key:value pair so could be
                                      // github:userURL, ppa:userId, other:idOrULR
    private List<String> tags;
    private Date startDate;
    private Date archivalDate;

    // No arguments constructor
    public Project() {}

    // All arguments constructor
    public Project(Long projectId, Long ownerId, String projectName, String projectStatus,
            String shortDescription, String description, List<String> imageUrls,
            List<String> collaborators, List<String> tags, Date startDate, Date archivalDate) {
        this.projectId = projectId;
        this.ownerId = ownerId;
        this.projectName = projectName;
        this.projectStatus = projectStatus;
        this.shortDescription = shortDescription;
        this.description = description;
        this.imageUrls = imageUrls;
        this.collaborators = collaborators;
        this.tags = tags;
        this.startDate = startDate;
        this.archivalDate = archivalDate;
    }

    // Databe arguments constructor(projectId generated by database)
    public Project(Long ownerId, String projectName, String projectStatus, String shortDescription,
            String description, List<String> imageUrls, List<String> collaborators, List<String> tags,
            Date startDate, Date archivalDate) {
        this.ownerId = ownerId;
        this.projectName = projectName;
        this.projectStatus = projectStatus;
        this.shortDescription = shortDescription;
        this.description = description;
        this.imageUrls = imageUrls;
        this.collaborators = collaborators;
        this.tags = tags;
        this.startDate = startDate;
        this.archivalDate = archivalDate;
    }

    // Boilerplate getters and setters(Edit: These are usually generated and no wonder, super
    // tedious job)
    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }

    public List<String> getCollaborators() {
        return collaborators;
    }

    public void setCollaborators(List<String> collaborators) {
        this.collaborators = collaborators;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getArchivalDate() {
        return archivalDate;
    }

    public void setArchivalDate(Date archivalDate) {
        this.archivalDate = archivalDate;
    }

    public String toString() {
        return "Project {" + ", ownerId=" + ownerId + ", projectName=" + projectName
                + ", projectStatus=" + projectStatus + ", shortDescription=" + shortDescription
                + ", description=" + description + ", imageUrls=" + imageUrls + ", collaborators="
                + collaborators + ", tags=" + tags + ", startDate=" + startDate + ", archivalDate="
                + archivalDate + "}";
    }
}
