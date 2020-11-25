from server.bo.User import User
from server.db.Mapper import Mapper


def __init__(self):
    super().__init__()


    def find_all(self):
        """Auslesen aller Benutzer unseres Systems.

        :return Eine Sammlung mit User-Objekten, die sämtliche Benutzer
                des Systems repräsentieren.
        """
        result = []
        cursor = self._cnx.cursor()
        cursor.execute("SELECT * from users")
        tuples = cursor.fetchall()

        for (name, email, user_id,role) in tuples:
            user = User()
            user.set_name(name)
            user.set_email(email)
            user.set_user_id(user_id)
            user.set_role(role)
            result.append(user)

        self._cnx.commit()
        cursor.close()

        return result


    def find_by_id(self, id):
        """Suchen eines Benutzers mit vorgegebener User ID. Da diese eindeutig ist,
        wird genau ein Objekt zurückgegeben.

        :param key Primärschlüsselattribut (->DB)
        :return User-Objekt, das dem übergebenen Schlüssel entspricht, None bei
            nicht vorhandenem DB-Tupel.
        """

        result = None

        cursor = self._cnx.cursor()
        command = "SELECT UserID, Username, UserMail, UserRole FROM users WHERE id={}".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (user_id, name, email, role) = tuples[0]
            user = User()
            user.set_user_id(user_id)
            user.set_name(name)
            user.set_email(email)
            user.set_role(role)
            result = user
        except IndexError:
            """Der IndexError wird oben beim Zugriff auf tuples[0] auftreten, wenn der vorherige SELECT-Aufruf
            keine Tupel liefert, sondern tuples = cursor.fetchall() eine leere Sequenz zurück gibt."""
            result = None

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_name(self, name):
        """Auslesen aller Benutzer anhand des Benutzernamens.

        :param name Name der zugehörigen Benutzer.
        :return Eine Sammlung mit User-Objekten, die sämtliche Benutzer
            mit dem gewünschten Namen enthält.
        """
        result = []
        cursor = self._cnx.cursor()
        command = "SELECT UserID, Username, UserMail, UserRole FROM users WHERE name LIKE '{}' ORDER BY name".format(name)
        cursor.execute(command)
        tuples = cursor.fetchall()

        for (user_id,name, email,role) in tuples:
            user = User()
            user.set_user_id(user_id)
            user.set_name(name)
            user.set_email(email)
            user.set_role(role)
            result.append(user)

        self._cnx.commit()
        cursor.close()

        return result

    def find_by_email(self, mail_address):
        """Auslesen aller Benutzer anhand der zugeordneten E-Mail-Adresse.

        :param mail_address E-Mail-Adresse der zugehörigen Benutzer.
        :return Eine Sammlung mit User-Objekten, die sämtliche Benutzer
            mit der gewünschten E-Mail-Adresse enthält.
        """
        result = None

        cursor = self._cnx.cursor()
        command = "SELECT UserID, UserName, UserMail, UserRole FROM users WHERE email={}".format(mail_address)
        cursor.execute(command)
        tuples = cursor.fetchall()

        try:
            (name, email, user_id,role) = tuples[0]
            user = User()
            user.set_user_id(user_id)
            user.set_name(name)
            user.set_email(email)
            user.set_role(role)
            result = user
        except IndexError:
            """Der IndexError wird oben beim Zugriff auf tuples[0] auftreten, wenn der vorherige SELECT-Aufruf
            keine Tupel liefert, sondern tuples = cursor.fetchall() eine leere Sequenz zurück gibt."""
            result = None

        self._cnx.commit()
        cursor.close()

        return result


    def insert(self, user):
        """Einfügen eines User-Objekts in die Datenbank.

        Dabei wird auch der Primärschlüssel des übergebenen Objekts geprüft und ggf.
        berichtigt.

        :param user das zu speichernde Objekt
        :return das bereits übergebene Objekt, jedoch mit ggf. korrigierter ID.
        """
        cursor = self._cnx.cursor()
        cursor.execute("SELECT MAX(UserID) AS maxid FROM users ")
        tuples = cursor.fetchall()

        for (maxid) in tuples:
            if maxid[0] is not None:
                """Wenn wir eine maximale ID festellen konnten, zählen wir diese
                um 1 hoch und weisen diesen Wert als ID dem User-Objekt zu."""
                user.set_user_id(maxid[0] + 1)
            else:
                """Wenn wir KEINE maximale ID feststellen konnten, dann gehen wir
                davon aus, dass die Tabelle leer ist und wir mit der ID 1 beginnen können."""
                user.set_user_id(1)

        command = "INSERT INTO users (UserID, UserName, UserMail, UserPW,UserRole VALUES (%s,%s,%s,%s,%s)"
        data = (user.get_user_id(), user.get_name(), user.get_email(), user.get_user_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()

        return user

    def update(self, user):
        """Wiederholtes Schreiben eines Objekts in die Datenbank.

        :param user das Objekt, das in die DB geschrieben werden soll
        """
        cursor = self._cnx.cursor()

        command = "UPDATE users " + "SET UserName=%s, UserMail=%s WHERE UserID=%s"
        data = (user.get_name(), user.get_email(), user.get_user_id())
        cursor.execute(command, data)

        self._cnx.commit()
        cursor.close()



