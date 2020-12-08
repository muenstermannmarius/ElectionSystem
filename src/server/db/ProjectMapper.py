import mysql.connector
from server.bo.Project import Project
from server.db.Mapper import Mapper

class ProjectMapper(Mapper):

    def __init__(self):
        super().__init__()

    def find_all(self):

        result = []
        cursor = self._connection.cursor()
        cursor.execute("SELECT project_id, project_name, short_description")
        tuples = cursor.fetchall()

        for (project_id, project_name, short_description) in tuples:
            project = Project()
            project.set_project_id(project_id)
            project.set_project_name(project_name)
            project.set_short_description(short_description)
            #project.set_link(link)
            #project.set_room_desired(room_desired)
            #project.set_grade_average(grade_average)
            #project.set_num_blockdays_in_exam(num_blockdays_in_exam)
            #project.set_blockdays_in_exam(blockdays_in_exam)
            #project.set_special_room(special_room)
            #project.set_date_blockdays_during_lecture(date_blockdays_during_lecture)
            #project.set_num_blockdays_prior_lecture(num_blockdays_prior_lecture)
            ##project.set_blockdays_prior_lecturetrue(blockdays_prior_lecturetrue)
            #project.set_num_blockdays_during_lecture(num_blockdays_during_lecture)
            #project.set_blockdays_during_lecture(blockdays_during_lecture)
            #project.set_weekly(weekly)
            #project.set_num_spots(num_spots)
            #project.set_project_type(project_type)
            #project.set_module(module)
            #project.set_project_professor(project_professor)
            #project.set_participation(participation)

            result.append(project)


        self._connection.commit()
        cursor.close()

        return result

    def find_project_by_id(self,project_id):

        result = None
        cursor = self._connection.cursor()
        command = "SELECT project_id, project_name, short_description FROM projects WHERE project_id={}" \
                    .format(project_id)

        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (project_id, project_name, short_description) = tuples[0]
            
            project = Project()
            project.set_project_id(project_id)
            project.set_project_name(project_name)
            project.set_short_description(short_description)
            #project.set_link(link)
            #project.set_room_desired(room_desired)
            #project.set_grade_average(grade_average)
            #project.set_num_blockdays_in_exam(num_blockdays_in_exam)
            #project.set_blockdays_in_exam(blockdays_in_exam)
            #project.set_special_room(special_room)
            #project.set_date_blockdays_during_lecture(date_blockdays_during_lecture)
            #project.set_num_blockdays_prior_lecture(num_blockdays_prior_lecture)
            ##project.set_blockdays_prior_lecturetrue(blockdays_prior_lecturetrue)
            #project.set_num_blockdays_during_lecture(num_blockdays_during_lecture)
            #project.set_blockdays_during_lecture(blockdays_during_lecture)
            #project.set_weekly(weekly)
            #project.set_num_spots(num_spots)
            #project.set_project_type(project_type)
            #project.set_module(module)
            #project.set_project_professor(project_professor)
            #project.set_participation(participation)
            result = project

        except IndexError:
            """The IndexError will occur above when accessing tuples [0] when the previous SELECT call
                       does not return tuples, but tuples = cursor.fetchall () returns an empty sequence."""
            result = None

        self._connection.commit()
        cursor.close()
        return result


