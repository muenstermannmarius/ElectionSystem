from server.bo.BusinessObject import BusinessObject
from datetime import date

"""Realization of an semester class"""
    
class Semester(BusinessObject):

    def __init__(self):
        super().__init__()
        self._winter_semester = True
        self._submit_projects_end_date = date
        self._grading_end_date = date

    def get_wintersemester(self):
        """Read out winter_semester."""
        return self._winter_semester

    def set_wintersemester(self, ws):
        """Set winter_semester."""
        self._winter_semester = ws

    def get_submit_projects_end_date(self):
        """Read submit_project_end_date."""
        return self._submit_projects_end_date

    def set_submit_projects_end_date(self, date):
        """Set submit_project_end_date."""
        self._submit_projects_end_date = date

    def get_grading_end_date(self):
        """Read the grading end date."""
        return self._grading_end_date

    def set_grading_end_date(self, gdate):
        """Set the grading end date."""
        self._grading_end_date = gdate

    def __str__(self):

        """Creats a simple textually Representation of a Semester() instanz.
        The Attributes are id, wintersemester, submit_project_end_date and grading_end_date."""

        return "Semester: {}, {}, {}, {}, {}, ".format(self.get_id(), self._winter_semester,
                                                       self._submit_projects_end_date,
                                                       self._grading_end_date,
                                                       self.get_creation_date())

    @staticmethod
    def to_dict(dicti=dict()):
        """Convert a Python dict() in a Semester()."""
        semester = Semester()
        semester.set_id(dicti["id"])
        semester.set_wintersemester(dicti["winter_semester"])
        semester.set_submit_projects_end_date(dicti["submit_projects_end_date"])
        semester.set_grading_end_date(dicti["grading_end_date"])
        semester.set_creation_date(dicti["creation_date"])
        return semester
