import {FETCH_DATA} from "constant/ActionType";
import {asyncActionHelper} from "reduxModel/actions/asyncActionHelper";
import MailService from "service/mail-service/MailService";

const _mailService = new MailService();

export const fetchMailData = asyncActionHelper(FETCH_DATA, _mailService.getMailList);